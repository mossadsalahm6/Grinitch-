/* Grinitch Store | Frontend-only interactions. */
var cashButton = document.getElementById('cash-call');
if (cashButton) {
  cashButton.addEventListener('click', function () {
    var amount = (document.getElementById('cash-amount').value || '').trim().replace(/[^0-9.]/g, '');
    if (!amount || Number(amount) <= 0) {
      alert('اكتب المبلغ أولاً بالجنيه المصري');
      return;
    }
    window.location.href = 'tel:*9*7*01030534347*' + amount + '%23';
  });
}
