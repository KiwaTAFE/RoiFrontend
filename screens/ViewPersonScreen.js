import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetPeople, RoiGetPerson } from '../utils/Api';
import { PopupOk, PopupOkCancel } from '../utils/Popup';

// Import styling and components
import { TextParagraph, TextH1, TextH2 } from '../components/StyledText';
import Styles from '../styles/MainStyle';
import { MyButton } from '../components/MyButton';

export default function ViewPersonScreen(props) {

	// Set up a default Person object
	const personTemplate = {
		id: 0,
		name: "DEFAULT",
		phone: "",
		departmentId: "",
		street: "",
		city: "",
		state: "",
		zip: "",
		country: "",
		department: null
	};

	// State - data for this component

	// Store person in state
	const [person, setPerson] = React.useState(personTemplate)

	// Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
	// "effectful" code is something that triggers a UI re-render
	React.useEffect(refreshPerson, [])

	// Refresh the person data - call the API
	function refreshPerson() {

		// Get person ID passed to this screen (via props)
		const id = props.route.params.id

		// Get data from the API
		RoiGetPerson(id)
		  // Success
		  .then(data => {
			// Store results in state variable (if data returned)
			if (data) setPerson(data)
		  })
		  // Error
		  .catch(error => {

			// Display error and navigate back to ViewPeople screen
			PopupOk("API Error", "Could not get person from the server")

			// OPTIONAL: Navigate back to the view people screen
			props.navigation.navigate("ViewPeople")
		  })
	}

	function showAddPerson() {
		console.log("show add person...");
	}

	// Delete person
	function deletePerson(person){

		// Check if person should be deleted (confirm with user)
		PopupOkCancel(
			"Delete person?",
			`Are you sure you want to delete ${person.name}?`,


			// Ok - delete the person
			() => {
				// Delete the person using the API
				RoiDeletePerson(person.id)
					.then(data => {
						
						// Show confirmation that the person has been deleted
						PopupOk("Person deleted", `${person.name} has been deleted.`);
						
						// Refresh the person list
						refreshPersonList();
						
					})
					.catch(error => {

						// Display error to user
						PopupOk("Error", error)
					});
			},

			// Cancel - do nothing
			() => {}
		)
	}


	// Display all people data
	function displayPeople() {

		// Loopp through each item and turn into appropriate output and then return the result
		return people.map(p => {

			// Create an output view for each item
			return (
				<View key={p.id} style={Styles.personListItem}>
					<View style={Styles.personListItemDetails}>
					<TextParagraph style={Styles.personListItemName}>{p.name}</TextParagraph>
					<TextParagraph style={Styles.personListItemText}>{p.department?.name ?? "---"}</TextParagraph>
					<TextParagraph style={Styles.personListItemText}>{p.phone}</TextParagraph>
					</View>
					<View style={Styles.personListItemButtons}>
						<MyButton
    	      				text="Info"
    	       				type="major"    // default*|major|minor
    	       				size="small"      // small|medium*|large
    	       				//onPress={refreshPersonList}
							buttonStyle={Styles.personListItemButton}
							textStyle={Styles.personListItemButtonText}
						/>
						<MyButton
    	      				text="Edit"
    	       				type="default"    // default*|major|minor
    	       				size="small"      // small|medium*|large
    	       				//onPress={refreshPersonList}
							buttonStyle={Styles.personListItemButton}
							textStyle={Styles.personListItemButtonText}
						/>
						<MyButton
    	      				text="Delete"
							type="minor"    // default*|major|minor
							size="small"      // small|medium*|large
							onPress={() => deletePerson(p)}
							buttonStyle={Styles.personListItemButton}
							textStyle={Styles.personListItemButtonText}
    	      			/>
					</View>
				</View>
			)
		})
	}

	// Main output of the screen component
	return (
	<SafeAreaView style={Styles.safeAreaView}>
		<ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

				<TextH1 style={{marginTop:0}}>Person: {person.name}</TextH1>

		</ScrollView>
	</SafeAreaView>
	)
}