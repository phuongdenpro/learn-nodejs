class SiteController {
    home = (req, res) => {
        res.render('layout/main', {
            title: 'Trang chủ | App Chat',
            layout: 'home',
            data: {}
        });
    };
}

module.exports = new SiteController();
