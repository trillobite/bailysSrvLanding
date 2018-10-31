
class Landing {
    textbody () {
        const btnClass = 'col-lg-4 col-sm-8 col-xs-12';
        let msgCss = {
            "float": "none",
            "display": "block",
            "margin": "0 auto",
            "margin-top": "10px",
            "text-align": "center",
        }

        const links = [
            $jConstruct('div', {
                class: btnClass,
                text: `You are visiting Baily's Camera Server.`
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "http://192.168.100.57/zm",
                text: `ZoneMinder`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "http://192.168.100.57:2812",
                text: `Monit`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "https://192.168.100.57:1337",
                text: "Unifi"
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "http://192.168.2.8/",
                text: `FreeNAS`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "https://oldtowndining.com/",
                text: `Old Town Dining LLC Website`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "https://baily.com/",
                text: `Bailys Website`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "docs.html",
                text: `View Bailys Documentation`,
            }).css(msgCss),
        ];

        let message = $jConstruct('div');

        for(var i = 0; i < links.length; ++i) {
            message.addChild(links[i]);
        }

        return message;
    }
    banner () {
        let row0 = $jConstruct('div', {
            class: "row",
        }).css({
            "float": "none",
            "display": "block",
            "margin": "0 auto",
        });
        let banner = $jConstruct('div', {
            class: "col-lg-10 col-sm-12",
            text: "Bailys",
        }).css({
            "float": "none",
            "display": "block",
            "margin": "0 auto",
            "text-align": "center",
            "margin-top": "80px",
            "margin-bottom": "80px",
            "font-size": "100px",
        });
        row0.addChild(banner);
        return row0;
    }
    generate () {
        let container = $jConstruct('div').css({
            "font-size": "24px",
            "font-family": 'Alfios',
            "src": "url('resource/alfios.otf')",
            "text-shadow": "1px 1px 1px gray",
        });
        container.addChild(this.banner());
        container.addChild(this.textbody());
        return container;
    }
}