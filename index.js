const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const countDisplay = document.getElementById("count-display");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // get the count of checked checkboxes
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    // update the count display
    countDisplay.innerHTML = `Complete: ${checkedCount}/13`;

    function celebrate() {
      if (checkedCount === 13) {
        countDisplay.innerHTML = `Congrats! You've finished 🎉`
      }
    }

    celebrate();
  });
});