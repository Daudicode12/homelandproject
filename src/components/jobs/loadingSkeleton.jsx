import "../../styles/skeleton.css";

function LoadingSkeleton() {
  // Display 6 skeleton cards
  const skeletons = Array(6).fill(null);

  return (
    <section className="jobs-grid">
      {skeletons.map((_, index) => (
        <article key={index} className="job-card skeleton-card">
          <div className="job-card-content">
            <div className="job-header">
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-employer"></div>
            </div>

            <div className="job-metadata">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>

            <div className="job-skills">
              <div className="skeleton skeleton-tag"></div>
              <div className="skeleton skeleton-tag"></div>
              <div className="skeleton skeleton-tag"></div>
            </div>
          </div>

          <div className="job-footer">
            <div className="job-stats">
              <div className="skeleton skeleton-text skeleton-text-short"></div>
              <div className="skeleton skeleton-text skeleton-text-medium"></div>
            </div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default LoadingSkeleton;
