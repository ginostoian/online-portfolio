let themeDots = document.querySelectorAll('.theme-dot');

let currentTheme = localStorage.getItem('theme');



let setTheme = (mode) => {
    const theme = document.querySelector('#theme-style');

    if (mode === 'light') {
        theme.href = 'default.css'
    } else if (mode === 'blue') {
        theme.href = 'blue.css'
    } else if (mode === 'green') {
        theme.href = 'green.css'
    } else if (mode === 'purple') {
        theme.href = 'purple.css'
    }

    localStorage.setItem('theme', mode);
}

if (currentTheme === null) {
    setTheme('light');
} else {
    setTheme(currentTheme);
}

for (const dot of themeDots) {
    dot.addEventListener('click', () => {
        let mode = dot.dataset.mode;
        setTheme(mode);
    })
}