module.exports = (req, res) => {
  if (typeof req.cookies['darkmode'] === 'undefined') res.cookie('darkmode', 'true');
  else res.clearCookie('darkmode');
  let redirectPage = req.body.page !== 'index' ? req.body.page : '';
  res.redirect(`/${redirectPage}`);
};