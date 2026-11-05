'use strict';

// Based on vCard by codewithsadee (MIT). Trimmed to the parts this site uses.

const toggle = (elem) => elem.classList.toggle('active');

// sidebar toggle (mobile)
const sidebar = document.querySelector('[data-sidebar]');
document.querySelector('[data-sidebar-btn]').addEventListener('click', () => toggle(sidebar));

// email: assembled here so the address is not written in the HTML
const addr = ['wlgh8449', 'gmail.com'].join('@');
document.querySelectorAll('[data-mail]').forEach((a) => {
  a.href = 'mailto:' + addr;
  a.innerHTML = addr.replace('@', '@<wbr>'); // wrap after @ instead of mid-word
});

// project filter
const filterItems = document.querySelectorAll('[data-filter-item]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');

const applyFilter = (value) => {
  filterItems.forEach((item) => {
    item.classList.toggle('active', value === 'all' || item.dataset.category === value);
  });
  filterBtns.forEach((btn) => btn.classList.toggle('active', btn.dataset.filter === value));
};

select.addEventListener('click', () => toggle(select));

selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    selectValue.innerText = item.innerText;
    toggle(select);
    applyFilter(item.dataset.filter);
  });
});

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectValue.innerText = btn.innerText;
    applyFilter(btn.dataset.filter);
  });
});

// page navigation
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.target;
    pages.forEach((page) => page.classList.toggle('active', page.dataset.page === target));
    navLinks.forEach((l) => l.classList.toggle('active', l === link));
    window.scrollTo(0, 0);
  });
});
