import React, { Component } from 'react';
import Parser from '../lib/parser';
import Tooltip from '@material-ui/core/Tooltip';

export default class BaseIconRender extends Component {
    getIcons(data, type) {
        let icons = Parser.getIcons(data, type);
        let images = [];
        icons.forEach(
            function(icon) {
                images.push(
                    <Tooltip title={icon} aria-label={icon}>
                        <i class={icon + " icon border rounded"}/>
                    </Tooltip>
                );
            }
        );
        return images;
    }
}