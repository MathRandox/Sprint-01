function encryptText() {
    var originalText = document.getElementById("texto-original").value;
    var resultText = encrypt(originalText);
    document.getElementById("resultText").value = resultText;
}

function decryptText() {
    var resultText = document.getElementById("resultText").value;
    var originalText = decrypt(resultText);
    document.getElementById("texto-original").value = originalText;
}

const encryptionMap = new Map([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]);

function encrypt(str) {
    return str.split('').map(char => encryptionMap.get(char) || char).join('');
}

function decrypt(str) {
    const decryptionMap = new Map(Array.from(encryptionMap, ([key, value]) => [value, key]));
    return str.split('').map(char => decryptionMap.get(char) || char).join('');
}

