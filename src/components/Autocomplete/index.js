import React from 'react';

import './style.css';

import Autocomplete from "react-autocomplete";
import { List, CellMeasurer, CellMeasurerCache } from "react-virtualized";

import { Container } from "./style";

class PureAutocomplete extends React.PureComponent {

    constructor() {
        super();

        this.cellHeightCache = new CellMeasurerCache({
            defaultHeight: 42,
            fixedWidth: true
        });

        this.state = {
            searchingFor: "",
            selection: "",
            data: []
        };

        let i = 0;
        while (i < 5000) {
            this.state.data.push({name: i + ' - ' + 'Fazenda de teste ' + i, id: i });
            i++;
        }
    }

    onSelect = item => {
        this.setState({ selection: item });
        console.log(item); // value
    };


    renderItem = item => {
        return <div>{item.name}</div>;
    };

    // menu item
    renderMenu = (items, searchingFor, autocompleteStyle) => {
        console.log(autocompleteStyle);
        this.cellHeightCache.clearAll();

        const rowRenderer = ({ key, index, parent, style }) => {
            const Item = items[index];

            const onMouseDown = e => {
                if (e.button === 0) {
                    Item.props.onClick(e);
                }
            };

            return (
                <CellMeasurer
                    cache={this.cellHeightCache}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                >
                    {React.cloneElement(Item, {
                        style: {
                            ...style
                        },
                        key: key,
                        onMouseDown: onMouseDown,
                        className: 'item'
                    })}
                </CellMeasurer>
            );
        };

        return (
            <List
                rowHeight={this.cellHeightCache.rowHeight}
                height={300}
                rowCount={items.length}
                rowRenderer={rowRenderer}
                width={autocompleteStyle.minWidth || 0}
                className="list"
                style={{
                    display: items.length ? "block" : "none"
                }}
                
            />
        );
    };

    render() {

        const searchTerm = this.state.searchingFor;
        let data = searchTerm
            ? this.state.data.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];

        return (
            <Container>
                <Autocomplete
                    renderItem={this.renderItem}
                    items={data}
                    className="autocomplete"
                    getItemValue={item => item.name}
                    value={this.state.searchingFor}
                    onChange={(e, value) => this.setState({ searchingFor: value })}
                    onSelect={this.onSelect}
                    renderMenu={this.renderMenu}
                />
            </Container>
        );
    };

};

export default PureAutocomplete;