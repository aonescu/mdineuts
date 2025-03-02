import { Publication } from "./types";
import styles from "./PublicationCard.module.css";
import DownloadIcon from "./DownloadIcon";

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const { label, title, description, downloadUrl } = publication;

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.label}>{label}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button onClick={handleDownload} className={styles.downloadLink}>
          <span className={styles.downloadText}>Download</span>
          <DownloadIcon />
        </button>
      </div>
    </article>
  );
};

export default PublicationCard;
