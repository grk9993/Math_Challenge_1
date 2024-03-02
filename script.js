const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
      const operation = this.id; 
      const operations = ['addition', 'subtraction', 'multiplication', 'division'];
      if (operations.includes(operation)) {
        window.location.href = operation + '.html'; 
      } else {
        // Placeholder for future operations
        alert(operation + " challenge coming soon!"); 
      }
    });
  });
