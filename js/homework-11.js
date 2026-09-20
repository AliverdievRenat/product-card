let user = null;

const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    alert('⚠️ Пожалуйста, введите email');
    emailInput.focus();
    return;
  }

  if (!emailInput.checkValidity()) {
    alert('⚠️ Пожалуйста, введите корректный email (пример: user@example.com)');
    emailInput.focus();
    return;
  }

  const userData = {
    email: emailValue,
  };

  console.log('Форма подписки отправлена:');
  console.log(userData);

  emailInput.value = '';
  alert('✅ Вы успешно подписались!');
});

const openModalButton = document.getElementById('open-register-modal');
const closeModalButton = document.getElementById('close-register-modal');
const modalOverlay = document.getElementById('modal-overlay');
const registerModal = document.getElementById('register-modal');
const registerForm = document.getElementById('register-form');

openModalButton.addEventListener('click', () => {
  registerModal.classList.add('modal-showed');
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  registerModal.classList.remove('modal-showed');
  document.body.style.overflow = '';
  registerForm.reset();
}
closeModalButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && registerModal.classList.contains('modal-showed')) {
    closeModal();
  }
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const birthDate = document.getElementById('birth-date').value;
  const login = document.getElementById('login').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('❌ Регистрация отклонена: пароли не совпадают!');
    return;
  }

  if (!registerForm.checkValidity()) {
    alert('❌ Регистрация отклонена: форма заполнена неверно!');
    registerForm.reportValidity();
    return;
  }

  user = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    login: login,
    password: password,
    createdOn: new Date(),
  };

  console.log('Регистрация успешна!');
  console.log(user);

  alert('✅ Вы успешно зарегистрированы!');

  closeModal();
});