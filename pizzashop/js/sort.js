var assortiment = [
   'Все пиццы',
    'Мясные пиццы',
    'Вегетарианские пиццы',
    'Пиццы гриль',
    'Острые пиццы',
    'Закрытые пиццы',
];

var pizzaName = document.getElementById('allpizza')

function sortPizza (x) {
    var j = assortiment[x]
    pizzaName.innerHTML = assortiment[x]
};
 
 
 
 
 
function offMeat () {
    document.getElementById('meat').style.display = "none";
    document.getElementById('meat2').style.display = "none";
    document.getElementById('meat3').style.display = "none";
    document.getElementById('meat4').style.display = "none";
};

function offСhease () {
    document.getElementById('cheaseee').style.display = "none";
    document.getElementById('cheaseee2').style.display = "none";
};

function offSpicy () {
    document.getElementById('spicy').style.display = "none";
    document.getElementById('spicy2').style.display = "none";
};

function notHavePizza () {
    document.getElementById('spicy').style.display = "none";
    document.getElementById('spicy2').style.display = "none";
    document.getElementById('cheaseee').style.display = "none";
    document.getElementById('cheaseee2').style.display = "none";
    document.getElementById('meat').style.display = "none";
    document.getElementById('meat2').style.display = "none";
    document.getElementById('meat3').style.display = "none";
    document.getElementById('meat4').style.display = "none";
    alert('Пицц этой категории сейчас нет в наличии :(');
};

function allPizza () {
    document.getElementById('spicy').style.display = "block";
    document.getElementById('spicy2').style.display = "block";
    document.getElementById('cheaseee').style.display = "block";
    document.getElementById('cheaseee2').style.display = "block";
    document.getElementById('meat').style.display = "block";
    document.getElementById('meat2').style.display = "block";
    document.getElementById('meat3').style.display = "block";
    document.getElementById('meat4').style.display = "block";
}