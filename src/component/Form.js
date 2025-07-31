import React, { useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';

function FormExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateDocx = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Form Submission",
                  bold: true,
                  size: 28,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Name: ${name}`,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Email: ${email}`,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Review:`,
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: review,
                  size: 22,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Submitted on: ${new Date().toLocaleString()}`,
                  size: 20,
                  italics: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "form-submission.docx");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    generateDocx(); // Generate Word doc on submit
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📝 Form to Word Export</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Your Name: <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Email: <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Review: <br />
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="5"
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </label>
        </div>

        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit & Generate Word Doc
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa' }}>
          <h3>Data saved to Word document!</h3>
          <p>Check your downloads for "form-submission.docx"</p>
        </div>
      )}
    </div>
  );
}

export default FormExample;
