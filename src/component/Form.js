import React, { useState, useRef, useEffect } from 'react';
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
import emailjs from '@emailjs/browser';

function FormExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(); // For emailjs
  const [sending, setSending] = useState(false); // To prevent double submission

  useEffect(() => {
  emailjs.init('SJnNUwfb6JTUzwFyN'); // making sure to initialize emailjs
}, []);

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
    if (sending) return; // Prevent double-submit
     setSending(true)
    setSubmitted(true);

    // ✅ Send Email
    emailjs.sendForm(
      'service_97vvzpq',        // Replace with your actual Service ID
      'template_b58l4xd',       // Replace with your actual Template ID
      formRef.current,
      'SJnNUwfb6JTUzwFyN'         // Replace with your actual Public Key
    ).then((result) => {
      console.log('Email sent:', result.text);
    }).catch((error) => {
      console.error('Email failed:', error.text);
    });

    generateDocx(); // Generate Word doc on submit
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📝 Form to Word Export</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Your Name: <br />
            <input
              type="text"
              name="name" // 👈 Needed for EmailJS
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
              name="email" // 👈 Needed for EmailJS
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
              name="review" // 👈 Needed for EmailJS
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
