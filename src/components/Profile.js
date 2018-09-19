import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'

import { Job, BirthDay, School, Match, Favorites } from '../particles/BioParticles'
import PhotoParticle from '../particles/PhotoParticle'

const imageUrl = 'http://1.bp.blogspot.com/-rk8-AY0fWZM/UygYVY7DVZI/AAAAAAAAL-4/b95hsa2L38Y/s1600/Kucing12.jpg'
const avatarUrl = 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2017/03/Ans-.jpg'

export default class Profile extends Component {
	static navigationOptions = {
    headerStyle: {
      position: 'absolute',
      top: 0,
      left: 0
    },
    headerBackTitleStyle: {
        opacity: 0,
    },
    headerTintColor: '#fff'
  };
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.bannerContainer}>
					<Image
					  style={styles.banner}
						source={{uri: imageUrl}} 
					/>
				</View>
				<StatusBar
				barStyle="light-content"
				backgroundColor="rgba(42, 141, 254, 0)"
				translucent={true}
				/>
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
					  <TouchableOpacity>
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
		height: 200,
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