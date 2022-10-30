const hamburger = document.querySelector('.mobile-menu .hamburger');
	const mobile_menu = document.querySelector('.mobile-menu ul');
	const menu_item = document.querySelectorAll('.mobile-menu ul li a');
	const header = document.querySelector('.nav-bar');
	

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});

	menu_item.forEach((item) => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			mobile_menu.classList.toggle('active');
		});
	});

