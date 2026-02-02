export default function ContactPage() {
  return (
    <div className="col-md-6">
      <h1 className="fw-bold mb-3">Contact Us</h1>

      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input type="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows={4}></textarea>
        </div>

        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
}