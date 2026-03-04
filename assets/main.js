const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    const expanded = nav.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
}

const calculator = document.querySelector('[data-calculator]');

if (calculator) {
  const totalOutput = calculator.querySelector('[data-total]');
  const floorRange = calculator.querySelector('[data-floor-range]');
  const rangeOutput = calculator.querySelector('.range-output');

  const formatPrice = (value) => `${new Intl.NumberFormat('cs-CZ').format(value)} Kč`;

  const recalculate = () => {
    const formData = new FormData(calculator);
    const layout = Number(formData.get('layout'));
    const vehicle = Number(formData.get('vehicle'));
    const crew = Number(formData.get('crew'));
    const floor = Number(formData.get('floor'));

    const layoutBase = {
      1: 3990,
      2: 4990,
      3: 7390,
      4: 10990,
    };

    let total = (layoutBase[layout] || 4990) + vehicle + crew + floor * 220;

    if (formData.get('packing')) {
      total += 900;
    }

    if (formData.get('furniture')) {
      total += 1200;
    }

    totalOutput.textContent = formatPrice(total);
    rangeOutput.textContent = floor === 0 ? 'Přízemí' : `${floor}. patro`;
  };

  calculator.addEventListener('input', recalculate);
  recalculate();
}
