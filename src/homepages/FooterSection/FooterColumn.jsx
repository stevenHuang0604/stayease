import FooterColumnTitle from "./FooterColumnTitle";

function FooterColumn({ title, detailAry }) {
  return (
    <div>
      <FooterColumnTitle>{title}</FooterColumnTitle>

      <ul className="space-y-2">
        {detailAry.map((detail, i) => {
          return (
            <li key={i}>
              <a
                href="/#footer"
                className="text-sm hover:text-violet-300 dark:hover:text-violet-700"
              >
                {detail}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterColumn;
