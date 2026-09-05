"use client";

import { FormEvent, useState } from "react";
import styles from "../look-journal.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function SupportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/look-journal-support", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send the request.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Your request has been received. A reply will be sent to the email address you provided."
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send the request. Please try again."
      );
    }
  }

  return (
    <form className={styles.supportForm} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <div className={styles.formGrid}>
        <label>
          <span>Shopify store URL *</span>
          <input
            name="storeUrl"
            type="url"
            placeholder="https://your-store.myshopify.com"
            required
          />
        </label>

        <label>
          <span>Theme version *</span>
          <input
            name="themeVersion"
            type="text"
            placeholder="Example: 0.6.9"
            required
          />
        </label>
      </div>

      <label>
        <span>Subject *</span>
        <input name="subject" type="text" required />
      </label>

      <label>
        <span>What happened? *</span>
        <textarea
          name="description"
          rows={8}
          placeholder="Describe the page, the steps you took, what you expected and what happened instead."
          required
        />
      </label>

      <label>
        <span>Screenshot or attachment</span>
        <input
          name="attachment"
          type="file"
          accept=".png,.jpg,.jpeg,.webp,.pdf,.txt"
        />
        <small>Optional. Maximum file size: 5 MB.</small>
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Submit request"}
      </button>

      {message && (
        <p
          className={
            status === "success" ? styles.formSuccess : styles.formError
          }
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
