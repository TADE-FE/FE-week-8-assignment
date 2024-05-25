class Weapon {
    constructor(name) {
        this.name = name;
    }
}

class Loadout {
    constructor() {
        this.weaponSystems = [];
        //stores instances of 'weapon' class
    }

    equipWeapon(weaponName) {
        const weapon = new Weapon(weaponName);
        this.weaponSystems.push(weapon);
    }

    removeWeapon(index) {
        this.weaponSystems.splice(index, 1);
        this.displayLoadout();
    }

    displayLoadout() {
        const loadoutList = document.getElementById('loadout-list');
        loadoutList.innerHTML = '';
        this.weaponSystems.forEach((weapon, index) => {
            const li = document.createElement('li');
            li.textContent = weapon.name;
            const deletBtn = document.createElement('button');
            deletBtn.textContent = 'Remove';
            deletBtn.onclick = () => this.removeWeapon(index);
            li.appendChild(deletBtn);
            loadoutList.appendChild(li);
        });
    }
}

class LoadoutApp {
    constructor(){
        this.loadout = new Loadout();
    }

    addWeapon() {       
        const weaponInput = document.getElementById('weapon-input');
        const weaponName = weaponInput.value.trim();
        if (weaponName !== '') {
            this.loadout.equipWeapon(weaponName);
            weaponInput.value = '';
        }
    }

    viewLoadout() {
        this.loadout.displayLoadout();
    }
}


const loadoutApp = new LoadoutApp();

function addWeapon() {
    loadoutApp.addWeapon();
}

function viewLoadout(){
    loadoutApp.viewLoadout();
}