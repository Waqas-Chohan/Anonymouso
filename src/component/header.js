function Myheader() {
    return (
        <div style={{
            background: 'linear-gradient(90deg, #a18cd1, #fbc2eb)', // purple gradient
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            margin: '30px auto',
            maxWidth: '600px'
        }}>
            <h1 style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Segoe UI, Arial, sans-serif',
                fontWeight: 'bold',
                letterSpacing: '2px',
                margin: 0
            }}>
                My First React App
            </h1>
        </div>
    );
}
export default Myheader;