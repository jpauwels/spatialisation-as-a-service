import React, {useEffect} from "react";
import {Howl} from "howler";
import {Button, Stack} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface AudioFilePlayerProps {
    audioURL: string,
	playing: boolean,
	setPlaying: Function
}

function AudioFilePlayer(props: AudioFilePlayerProps) {
	const sound = new Howl({
		src: [props.audioURL],
		html5: true
	});

	useEffect(() => {
		if (props.playing) {
			sound.play();
		} else {
			sound.pause();
		}
	},[props.playing]);

	return (
		<Stack
			spacing={2}
		>
			<Button onClick={() => props.setPlaying(true)}>
				{"Play"}
			</Button>
			<div>
				{(sound.playing() ? <PlayArrowIcon/> : "")}
			</div>
			<Button onClick={() => props.setPlaying(false)}>
				{"Pause"}
			</Button>
		</Stack>
	);
}

export const MemoAudioFilePlayer = React.memo(AudioFilePlayer);
