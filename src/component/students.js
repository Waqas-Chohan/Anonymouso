function StudentCard(props) {
  return (
    <div style={{
      border: '2px solid #e0e7ff',
      borderRadius: '16px',
      padding: '20px',
      margin: '15px',
      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.15)',
      backgroundColor: '#ffffff',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-5px)';
      e.target.style.boxShadow = '0 15px 35px rgba(99, 102, 241, 0.25)';
      e.target.style.borderColor = '#6366f1';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.15)';
      e.target.style.borderColor = '#e0e7ff';
    }}>
      
      {/* Status Indicator */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '12px',
        height: '12px',
        backgroundColor: props.isActive !== false ? '#10b981' : '#f59e0b',
        borderRadius: '50%',
        boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)'
      }}></div>

      {/* Avatar Circle */}
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15px',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
      }}>
        {props.name ? props.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'ST'}
      </div>

      {/* Student Name */}
      <h2 style={{
        color: '#1e293b',
        fontSize: '22px',
        fontWeight: '700',
        margin: '0 0 12px 0',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {props.name || 'Student Name'}
      </h2>

      {/* Roll Number */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '8px 12px',
        backgroundColor: '#f1f5f9',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <span style={{
          fontSize: '16px',
          marginRight: '8px'
        }}>🎓</span>
        <p style={{
          margin: '0',
          fontSize: '15px',
          color: '#475569'
        }}>
          <strong style={{ color: '#334155' }}>Roll No:</strong> 
          <span style={{
            marginLeft: '8px',
            fontFamily: 'monospace',
            backgroundColor: '#6366f1',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            {props.roll || 'N/A'}
          </span>
        </p>
      </div>

      {/* Department */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '8px 12px',
        backgroundColor: '#f1f5f9',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <span style={{
          fontSize: '16px',
          marginRight: '8px'
        }}>🏛️</span>
        <p style={{
          margin: '0',
          fontSize: '15px',
          color: '#475569'
        }}>
          <strong style={{ color: '#334155' }}>Department:</strong> 
          <span style={{
            marginLeft: '8px',
            backgroundColor: getDepartmentColor(props.department),
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '500'
          }}>
            {props.department || 'Not Assigned'}
          </span>
        </p>
      </div>

      {/* Additional Info */}
      {props.email && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <span style={{ marginRight: '8px' }}>📧</span>
          {props.email}
        </div>
      )}

      {props.year && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <span style={{ marginRight: '8px' }}>📅</span>
          Class of {props.year}
        </div>
      )}

      {props.gpa && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <span style={{ marginRight: '8px' }}>⭐</span>
          GPA: <strong style={{ marginLeft: '4px', color: '#059669' }}>{props.gpa}</strong>
        </div>
      )}

      {/* Action Button */}
      <button
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '15px',
          backgroundColor: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#4f46e5';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#6366f1';
          e.target.style.transform = 'translateY(0)';
        }}
        onClick={() => props.onViewDetails && props.onViewDetails(props)}
      >
        View Details →
      </button>

      {/* Decorative Element */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
      }}></div>
    </div>
  );
}

// Helper function for department colors
function getDepartmentColor(department) {
  const colors = {
    'Computer Science': '#3b82f6',
    'Engineering': '#10b981',
    'Mathematics': '#8b5cf6',
    'Physics': '#f59e0b',
    'Chemistry': '#ef4444',
    'Biology': '#059669',
    'Business': '#f97316',
    'Arts': '#ec4899'
  };
  return colors[department] || '#6b7280';
}

export default StudentCard;