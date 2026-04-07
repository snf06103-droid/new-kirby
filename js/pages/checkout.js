document.addEventListener('DOMContentLoaded', () => {
    const btnEasyPay = document.querySelector('.payment-option li:nth-child(1)');
    const btnCardPay = document.querySelector('.payment-option li:nth-child(2)');
    const btnBankTransfer = document.querySelector('.payment-option li:nth-child(3)');
    const btnPhoneSection = document.querySelector('.payment-option li:nth-child(4)');
    const allAgreementCheckbox = document.querySelector('input[name="all"]');
    const agreementCheckboxes = document.querySelectorAll(
        'input[name="term_service"], input[name="term_privacy"]'
    );
    const cardDropdowns = document.querySelectorAll('.card-option');

    const easyPaySection = document.querySelector('.easy-pay');
    const cardSection = document.querySelector('.card-section');
    const bankTransferSection = document.querySelector('.bank-transfer');
    const phoneSection = document.querySelector('.phone-section');

    const payOptions = [
        { button: btnEasyPay, section: easyPaySection },
        { button: btnCardPay, section: cardSection },
        { button: btnBankTransfer, section: bankTransferSection },
        { button: btnPhoneSection, section: phoneSection }
    ].filter(({ button, section }) => button && section);

    function setActivePayOption(activeButton, activeSection) {
        payOptions.forEach(({ button, section }) => {
            const isActive = button === activeButton && section === activeSection;
            button.classList.toggle('on', isActive);
            section.classList.toggle('on', isActive);
        });
    }

    payOptions.forEach(({ button, section }) => {
        button.addEventListener('click', () => {
            setActivePayOption(button, section);
        });
    });

    if (btnEasyPay && easyPaySection) {
        setActivePayOption(btnEasyPay, easyPaySection);
    }

    if (cardDropdowns.length) {
        cardDropdowns.forEach((dropdown) => {
            const trigger = dropdown.querySelector('p');
            const items = dropdown.querySelectorAll('li');

            if (!trigger || !items.length) {
                return;
            }

            trigger.addEventListener('click', (event) => {
                event.stopPropagation();

                cardDropdowns.forEach((otherDropdown) => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('open');
                    }
                });

                dropdown.classList.toggle('open');
            });

            items.forEach((item) => {
                item.addEventListener('click', () => {
                    trigger.textContent = item.textContent;
                    dropdown.classList.remove('open');
                });
            });
        });

        document.addEventListener('click', () => {
            cardDropdowns.forEach((dropdown) => {
                dropdown.classList.remove('open');
            });
        });
    }

    if (allAgreementCheckbox && agreementCheckboxes.length) {
        allAgreementCheckbox.addEventListener('change', () => {
            agreementCheckboxes.forEach((checkbox) => {
                checkbox.checked = allAgreementCheckbox.checked;
            });
        });

        agreementCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                allAgreementCheckbox.checked = Array.from(agreementCheckboxes).every(
                    (agreementCheckbox) => agreementCheckbox.checked
                );
            });
        });
    }
});
