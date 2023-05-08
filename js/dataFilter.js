function showPortfolioItems(filter) {
  // 获取所有作品集的元素
  var items = document.querySelectorAll('.portfolio-items');

  // 遍历所有作品集，显示匹配的作品集，隐藏其它作品集
  for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute('data-filter') === filter) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }

  // 切换活动状态的类别元素
  var filters = document.querySelectorAll('.portfolio-filter li');
  for (var j = 0; j < filters.length; j++) {
    if (filters[j].getAttribute('data-filter') === filter) {
      filters[j].classList.add('active');
    } else {
      filters[j].classList.remove('active');
    }
  }
}