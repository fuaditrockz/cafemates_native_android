import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'
import { responsiveHeight } from 'react-native-rescomponent'

import { Job, BirthDay, School, Match, Favorites } from '../particles/BioParticles'
import PhotoParticle from '../particles/PhotoParticle'
import ProfileDetailModal from '../particles/Modal/ProfileDetailModal';
import { StatusBarTransparent } from '../particles/StatusBarParticles'

const imageUrl = 'http://1.bp.blogspot.com/-rk8-AY0fWZM/UygYVY7DVZI/AAAAAAAAL-4/b95hsa2L38Y/s1600/Kucing12.jpg'
const avatarUrl = 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2017/03/Ans-.jpg'

export default class Profile extends Component {
	constructor() {
		super()
		this.state = {
			modalVisible: false
		}
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible })
	}
	
	render() {
		return (
			<View>
				<ProfileDetailModal 
					modalVisible={this.state.modalVisible}
					closeModal={() => this.setModalVisible(!this.state.modalVisible)}
				/>
				<ScrollView style={styles.container}>
					<View style={styles.bannerContainer}>
						<Image
							style={styles.banner}
							source={{uri: imageUrl}} 
						/>
					</View>
					<StatusBarTransparent />
					<View style={styles.avatarContainer}>
						<Thumbnail 
							large
							source={{ uri: avatarUrl}} 
							style={styles.avatar}
						/>
					</View>
					<View style={styles.bioContainer}>
						<Text style={styles.name}>Abu Janda, 45</Text>
						<Text>"Tak ada gading yang tak retak bro."</Text>
					</View>
					<View style={styles.completeBioContainer}>
						<Job 
							profession='Chief Executive Officer'
							company='Telecreative'
						/>
						<School
							major='Ilmu Kebinatangan'
							school='Harvard University' 
						/>
						<BirthDay 
							date='06 January'
						/>
						<Match 
							total={20}
						/>
						<Favorites
							favorites='Flirting, ML, Sex, SexSamaBurung, Monyet, Binatang, BibitUnggul, Incest'
						/>
						<View style={styles.seeMoreContainer}>
							<TouchableOpacity onPress={() => this.setModalVisible(true)}>
								<Text style={styles.seeMore}>See More Details</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.photosContainer}>
						<View style={styles.allPhotos}>
							<PhotoParticle
								photoUrl={imageUrl}
							/>
							<PhotoParticle
								photoUrl={imageUrl}
							/>
							<PhotoParticle
								photoUrl={imageUrl}
							/>
							<PhotoParticle
								photoUrl={imageUrl}
							/>
						</View>
						<View style={styles.seeMoreContainer}>
							<TouchableOpacity>
								<Text style={styles.seeMore}>See More Photos</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e5f0fd'
	},
	bannerContainer: {
		width: '100%',
		height: 250
	},
	banner: {
		width: '100%', 
		height: '100%'
	},
	avatarContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		backgroundColor: '#fff'
	},
	avatar: {
		position: "absolute",
		top: -35
	},
	bioContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		paddingBottom: 15,
		marginBottom: 10
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#4a4a4a'
	},
	completeBioContainer: {
		height: responsiveHeight(29),
		backgroundColor: '#fff',
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginBottom: 10
	},
	seeMoreContainer: {
		alignItems: 'center',
		paddingVertical: 10
	},
	seeMore: {
		fontWeight: 'bold',
		color: '#2c8dfe'
	},
	photosContainer: {
		height: 150,
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginBottom: 10
	},
	allPhotos: {
		flexDirection: 'row',
	}
})