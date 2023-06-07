const index = (req, res) => {
  let isDarkMode = req.cookies['darkmode'] === 'true';
  res.render('index.ejs', { page: 'index', darkMode: isDarkMode });
};

module.exports = {
  index,
};