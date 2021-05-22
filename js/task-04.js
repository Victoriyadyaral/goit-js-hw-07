const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    value: document.getElementById("value"),
};

const counterExample = function ({ initialValue = 0, step = 1 } = {}) {
    this._counterValue = initialValue;
    this._step = step;
    this._bindEvents();
};

counterExample.prototype.increment = function() {
    this._counterValue += this._step;
};

counterExample.prototype.decrement = function() {
    this._counterValue -= this._step;
};

counterExample.prototype.updareCounterValue = function() {
    refs.value.textContent = this._counterValue;
};

counterExample.prototype._bindEvents = function() {
    refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updareCounterValue();
    });

    refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updareCounterValue();
    });
};

const counter = new counterExample();
