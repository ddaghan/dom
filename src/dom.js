export function dom(tagName, props = {}, children = []) {
    const el = tagName === 'frag' ?
        document.createDocumentFragment() : 
        document.createElement(tagName);
    for (const [name, prop] of Object.entries(props)) {
        switch (typeof prop) {
            case 'function':
                el[name] = prop;
                break;
            case 'boolean':
                if (prop) {
                    el.setAttribute(name, '');
                } else {
                    el.removeAttribute(name);
                }
                break;
            case 'string':
            case 'number':
                el.setAttribute(name, prop);
                break;
        }
    }
    const frag = document.createDocumentFragment();
    children.forEach(child => {
        if (child == null) {
            return;
        }
        if (['string', 'boolean', 'number'].includes(typeof child)) {
            child = document.createTextNode(child);
        }
        frag.appendChild(child);
    });
    el.appendChild(frag);
    return el;
}