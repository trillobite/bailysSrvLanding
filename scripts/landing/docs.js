
class Docs {
    textbody () {
        let msgCss = {
            "float": "none",
            "display": "block",
            "margin": "0 auto",
            "margin-top": "10px",
            "text-align": "center",
        }
        let msg1 = $jConstruct('div', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            text: `You are viewing Bailys Documentation.`
        }).css(msgCss);
        let msg2 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "resource/pdf/BailysCameraSystem.pdf",
            text: `Camera Server`,
        }).css(msgCss);
        let msg3 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "resource/pdf/VPNGuide.pdf",
            text: `VPNGuide`,
        }).css(msgCss);
        let msg4 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "resource/pdf/passwordRecoveryForm-Print this one.pdf",
            text: `Password Recovery Form`,
        }).css(msgCss);
        let msg5 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "resource/pdf/bailysGoldPass.pdf",
            text: `Bailys Gold Pass`,
        }).css(msgCss);
        let msg6 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "resource/pdf/Bailys Troubleshoooting.pdf",
            text: "Troubleshooting",
        }).css(msgCss);
        let msg7 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "resource/pdf/passwordManagementSystem.pdf",
            text: "Password Management",
        }).css(msgCss);

        let message = $jConstruct('div');
        message.addChild(msg1).addChild(msg2).addChild(msg3).addChild(msg4).addChild(msg5).addChild(msg6).addChild(msg7);

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