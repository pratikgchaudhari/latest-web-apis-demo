const pr = new Intl.PluralRules('en-US');
const plurals = new Map([['one', 'cat'], ['other', 'cats']]);

function pluralize(count) {
    document.getElementById('result').innerHTML = `You've got ${count.trim() == ''? 'no ':count} ${plurals.get(pr.select(count))}`;
}
