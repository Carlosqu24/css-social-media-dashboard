
export function switchTheme() {
    const $switchThemeButton = document.querySelector('.switch-theme');
    

    function changeButtonIcon(theme) {
        if(theme == 'dark') {
            $switchThemeButton.innerHTML = `
                <span class="material-icons ligth">
                    light_mode
                </span>
            `;
        } else if(theme === 'ligth') {
            $switchThemeButton.innerHTML = `
                <span class="material-icons dark">
                    dark_mode
                </span>
            `;
        }
    };

    function darkTheme() {
        const tags = document.querySelectorAll('[data-dark]');
        const cardTags = document.querySelectorAll('[data-dark-card]');

        tags.forEach(tag => {
            tag.classList.add('dark-theme');
            tag.classList.remove('ligth-theme');
        });

        cardTags.forEach(cardTags => {
            cardTags.classList.add('dark-theme-cards');
            cardTags.classList.remove('ligth-theme-cards');
        })

        changeButtonIcon('dark');
    };

    function ligthTheme() {
        const tags = document.querySelectorAll('[data-dark]');
        const cardTags = document.querySelectorAll('[data-dark-card]');

        tags.forEach(tag => {
            tag.classList.add('ligth-theme');
            tag.classList.remove('dark-theme');
        });

        cardTags.forEach(cardTags => {
            cardTags.classList.add('ligth-theme-cards');
            cardTags.classList.remove('dark-theme-cards');
        })

        changeButtonIcon('ligth');
    };

    $switchThemeButton.addEventListener('click', e => {
        if (e.target.matches('.dark')) darkTheme();
        if (e.target.matches('.ligth')) ligthTheme()
    });
};
