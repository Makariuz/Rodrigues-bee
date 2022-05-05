import "./Loading.scss";

export function Loading() {
  return (
    <div className="loading__screen">
      <div className="img__wrapper__loading">
        <img src="/assets/bees__loading.png" alt="" />
        <h1>Loading..<span>.</span></h1> 
      </div>

    </div>
  );
}
