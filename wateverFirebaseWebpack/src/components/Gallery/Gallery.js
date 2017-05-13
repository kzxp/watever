import React from 'react';
import {getFirebase} from '../firebase'

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: {},
            btnViewAll: {
                text: 'View all',
                class: '',
                func: this.getGallery
            },
            shuffle: undefined
        }
    }

    getGallery() {
        this.setState({
            btnViewAll: Object.assign( this.state.btnViewAll, { class: 'is-loading is-disabled' } )
        })
        const firebaseApp = getFirebase();
        const database = firebaseApp.database();

        const dbRef = database.ref('/imageStoreData/').orderByKey()

        dbRef.once('value').then((snapshot) => {
            this.setState({
                gallery: snapshot.val(),
                btnViewAll: {
                    class: '',
                    text: 'Shuffle images',
                    func: () => { this.setState({ shuffle: Math.random() }) }
                }
            })

        })
    }

    getImageList() {
        return this.state.gallery && Object.keys(this.state.gallery).map((key, index) => {
            if (this.state.gallery[key].source === 'external')
                return
            return Object.keys(this.state.gallery[key].images).map((k, i) => {

                return (
                    <div className="column is-one-third-mobile is-one-quarter-tablet">
                        <figure className="image is-square">
                            <img src={this.state.gallery[key].images[k].url} key={`${key}-${i}`} alt={`${key}-image`}/>
                        </figure>
                    </div>
                )
            })
        })
    }

    shuffle(a) {
        for (let x = 0; x < a.length; x++) {
            if ( a[x] ) {
                for (let i = a[x].length; i; i--) {
                    let j = Math.floor(Math.random() * i);
                    [a[x][i - 1], a[x][j]
                    ] = [a[x][j], a[x][i - 1]];
                }
            }
        }

        return a
    }

    render() {

        let imageList = this.shuffle(this.getImageList())

        return (
            <div className="columns is-gallery is-multiline is-mobile">
                <div className="column is-12 has-text-centered">
                    <button className={`button is-info ${this.state.btnViewAll.class} is-outlined`} onClick={this.state.btnViewAll.func.bind(this)}>
                        { this.state.btnViewAll.text }
                    </button>
                </div>
                {imageList}
            </div>
        );
    }

}

export default Gallery;
