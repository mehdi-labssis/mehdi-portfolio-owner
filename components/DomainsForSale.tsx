import { ArrowUpRight, Globe2 } from "lucide-react";

const domains = [
  {
    name: "charmox.com",
    price: "$2,490",
    description:
      "A short, memorable .com domain suited to fashion, lifestyle, technology or a global consumer brand.",
    purchaseUrl:
      "https://www.namecheap.com/domains/registration/results/?domain=charmox.com",
  },
  {
    name: "agaloova.com",
    price: "$1,499",
    description:
      "A distinctive, brandable .com domain with an established creative identity and global potential.",
    purchaseUrl:
      "https://www.namecheap.com/domains/registration/results/?domain=agaloova.com",
  },
];

export default function DomainsForSale() {
  return (
    <section className="domains-sale">
      <div className="domains-heading">
        <div>
          <p>Premium digital assets</p>
          <h2>
            Domains <em>for sale.</em>
          </h2>
        </div>

        <p>
          Brandable domain names available through a secure Namecheap
          transaction and fast transfer.
        </p>
      </div>

      <div className="domains-grid">
        {domains.map((domain) => (
          <article className="domain-card" key={domain.name}>
            <div className="domain-card-top">
              <Globe2 />
              <span>Premium .com</span>
            </div>

            <div>
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
            </div>

            <div className="domain-card-bottom">
              <div>
                <span>Buy now</span>
                <strong>{domain.price}</strong>
              </div>

              <a
                href={domain.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy domain
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}