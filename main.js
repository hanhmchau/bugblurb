"use strict";

class ImagePopoutWithBlurb {    
    static process(imagePopout, html, data) {
        const blurb = this._getBlurbIfExists(imagePopout);
        console.warn(blurb);
        if (blurb) {
            const lightboxImage = $(html).find('.lightbox-image')[0];
            if (lightboxImage) {
                const blurbContainer = document.createElement('div');
                $(blurbContainer).addClass('blurb-container').html(blurb);
                $(lightboxImage).after(blurbContainer);
            }
        }
    }

    /** @private */
    static _getBlurbIfExists(imagePopout) {
        try {
            return imagePopout._related.data.data.details.biography.value;
        } catch (e) {
            return;
        }
    }
}

Hooks.on("renderImagePopout", ImagePopoutWithBlurb.process.bind(ImagePopoutWithBlurb));