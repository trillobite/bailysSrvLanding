
class Landing {
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
            text: `You are visiting Baily's Camera Server.`
        }).css(msgCss);
        let msg2 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "http://192.168.100.57/zm",
            text: `ZoneMinder`,
        }).css(msgCss);
        let msg3 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "http://192.168.2.8/",
            text: `FreeNAS`,
        }).css(msgCss);
        let msg4 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "https://oldtowndining.com/",
            text: `Old Town Dining LLC Website`,
        }).css(msgCss);
        let msg5 = $jConstruct('a', {
            class: 'col-lg-8 col-sm-10 col-xs-12',
            href: "https://baily.com/",
            text: `Bailys Website`,
        }).css(msgCss);

        let message = $jConstruct('div');
        message.addChild(msg1).addChild(msg2).addChild(msg3).addChild(msg4).addChild(msg5);

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