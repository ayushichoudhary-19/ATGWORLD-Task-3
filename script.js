function simulateLoading() {
    const submitButton = document.querySelector('.submit-button');
    submitButton.disabled = true;
  
    setTimeout(() => {
      submitButton.disabled = false;
    }, 2000);
  }
  