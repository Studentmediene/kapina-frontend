/*
 *
 * EpisodeAdmin
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectShows,
  selectShowsLoading,
  selectShowsError,
} from 'containers/Shows/selectors';
import { addEpisode } from './actions';

import { loadShows } from 'containers/Shows/actions';
import styles from './styles.css';

import TextInput from 'components/TextInput';
import TextAreaInput from 'components/TextAreaInput';
import SubmitButton from 'components/SubmitButton';
import SelectInput from 'components/SelectInput';

export class EpisodeAdmin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      lead: '',
      podcastUrl: '',
      soundUrl: '',
      showId: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLeadChange = this.handleLeadChange.bind(this);
    this.handlePodcastUrlChange = this.handlePodcastUrlChange.bind(this);
    this.handleSoundUrlChange = this.handleSoundUrlChange.bind(this);
    this.handleShowChange = this.handleShowChange.bind(this);
  }

  componentWillMount() {
    this.props.loadShows();
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleLeadChange(event) {
    this.setState({ lead: event.target.value });
  }

  handlePodcastUrlChange(event) {
    this.setState({ podcastUrl: event.target.value });
  }

  handleSoundUrlChange(event) {
    this.setState({ soundUrl: event.target.value });
  }

  handleShowChange(event) {
    this.setState({ showId: event.target.value || null });
  }

  handleEpisodeChange() {
    // console.log('Episode changed!');
  }

  render() {
    let shows;
    if (this.props.shows !== false && this.props.shows.length > 0) {
      shows = this.props.shows.map(
        show => <option value={show.id} key={show.id}>{show.title}</option>
      );
      shows.unshift(<option value={''} key={'show-placeholder'}>Velg show</option>);
    }

    return (
      <div className={styles.episodeAdmin}>
        <h1>Opprett ny episode</h1>
        <TextInput label={'Tittel'} onChange={this.handleTitleChange} value={this.state.title} />
        <TextAreaInput label={'Kort beskrivelse'} onChange={this.handleLeadChange} value={this.state.lead} />
        <SelectInput label={'Hvilket show hører episoden til?'} options={shows} onChange={this.handleShowChange} />
        <SelectInput label={'Hva heter episoden i Digas?'} options={this.props.shows} onChange={this.handleEpisodeChange} />
        {/* TODO */}
        <TextInput label={'PodcastUrl - Automatiser!'} onChange={this.handlePodcastUrlChange} value={this.state.podcastUrl} />
        <TextInput label={'SoundUrl - Automatiser!'} onChange={this.handleSoundUrlChange} value={this.state.soundUrl} />

        <SubmitButton onClick={() => this.props.onAddEpisode(this.state)}>Lagre</SubmitButton>
      </div>
    );
  }
}

EpisodeAdmin.propTypes = {
  loadShows: React.PropTypes.func,
  onAddEpisode: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  error: React.PropTypes.bool,
  shows: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array,
  ]),
};

EpisodeAdmin.defaultProps = {
  loading: false,
  error: false,
  shows: [],
};


const mapStateToProps = createStructuredSelector({
  shows: selectShows(),
  loading: selectShowsLoading(),
  error: selectShowsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddEpisode: (episode) => dispatch(addEpisode(episode)),
    loadShows: () => dispatch(loadShows()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeAdmin);