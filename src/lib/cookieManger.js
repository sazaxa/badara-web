/**
 * 로컬 쿠키 매니저.
 * https://github.com/psmever/blog.frontend/blob/main/src/Utils/Helper.ts
 */
export const cookieManager = {
    set: (cname, cvalue, hours = 24) => {
        const d = new Date();
        d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    },
    get: cname => {
        const name = cname + '=';
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return '';
    },
    remove: cname => {
        const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        document.cookie = cname + '=;' + expires + ';path=/';
    },
};
