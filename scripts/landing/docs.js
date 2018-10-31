
class Docs {
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
                text: `You are viewing Bailys Documentation.`
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/BailysCameraSystem.pdf",
                text: `Camera Server`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/VPNGuide.pdf",
                text: `VPNGuide`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/passwordRecoveryForm-Print this one.pdf",
                text: `Password Recovery Form`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/bailysGoldPass.pdf",
                text: `Bailys Gold Pass`,
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/Bailys Troubleshoooting.pdf",
                text: "Troubleshooting",
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/passwordManagementSystem.pdf",
                text: "Password Management",
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/BailysUnifi.pdf",
                text: "Unifi Mesh Network",
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "resource/pdf/Bailys Monit.pdf",
                text: "Monit Automated System Recovery",
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "https://zoneminder.readthedocs.io/en/stable/index.html",
                text: "ZoneMinder Official Documentation",
            }).css(msgCss),
            $jConstruct('a', {
                class: btnClass,
                href: "http://doc.freenas.org/11/freenas.html",
                text: "FreeNAS Official Documentation",
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
            text: "Bailys Documentation",
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