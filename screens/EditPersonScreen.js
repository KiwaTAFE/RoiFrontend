import * as React from 'react';
import { View, ScrollView, TextInput, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetPerson } from '../utils/Api';
import { PopupOk, PopupOkCancel } from '../utils/Popup';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextLabel } from '../components/StyledText';
import Styles from '../styles/MainStyle';
import { MyButton } from '../components/MyButton';

export default function EditPersonScreen(props) {

	// State - data for this component

	// Store person in state
	const [id, setId] = React.useState(-1);
	const [name, setName] = React.useState("");
	const [nameOriginal, setNameOriginal] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [departmentId, setDepartmentId] = React.useState(0);
	const [street, setStreet] = React.useState("");
	const [city, setCity] = React.useState("");
	const [state, setState] = React.useState("");
	const [zip, setZip] = React.useState("");
	const [country, setCountry] = React.useState("");

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
		  .then(p => {
			// Store results in state variable (if data returned)
			if (p) {
				setId(p.id);
				setName(p.name);
				setNameOriginal(p.name);
				setDepartmentId(p.departmentId);
				setStreet(p.street);
				setCity(p.city);
				setState(p.state);
				setZip(p.zip);
				setCountry(p.country);
			}
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

	// Save person
	function deletePerson(){

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
						
						// Go back to the person list (ViewPeople)
						props.navigation.replace("Root", {screen: "People"});
						
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

	// Main output of the screen component
	return (
	<SafeAreaView style={Styles.safeAreaView}>
		<ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

			<TextH1 style={{marginTop:0}}>Edit: {nameOriginal}</TextH1>

			<View style={Styles.form}>

				<View style={Styles.fieldSet}>
					<TextParagraph style={Styles.legend}>Details</TextParagraph>

					<View style={Styles.formRow}>
						<TextLabel>Name:</TextLabel>
						<TextInput value={name} onChangeText={setName} style={Styles.textInput} />
					</View>

					<View style={Styles.formRow}>
						<TextLabel>Phone:</TextLabel>
						<TextInput value={phone} onChangeText={setPhone} style={Styles.textInput} />
					</View>

					<View style={Styles.formRow}>
						<TextLabel>Department:</TextLabel>
						<TextInput value={departmentId} onChangeText={setDepartmentId} style={Styles.textInput} />
					</View>
				</View>

				<View style={Styles.fieldSet}>
					<TextParagraph style={Styles.legend}>Address</TextParagraph>

					<View style={Styles.formRow}>
						<TextLabel>Street:</TextLabel>
						<TextInput value={street} onChangeText={setStreet} style={Styles.textInput} />
					</View>

					<View style={Styles.formRow}>
						<TextLabel>City:</TextLabel>
						<TextInput value={city} onChangeText={setCity} style={Styles.textInput} />
					</View>

					<View style={Styles.formRow}>
						<TextLabel>State:</TextLabel>
						<TextInput value={state} onChangeText={setState} style={Styles.textInput} />
					</View>

					<View style={Styles.formRow}>
						<TextLabel>ZIP:</TextLabel>
						<TextInput value={zip} onChangeText={setZip} style={Styles.textInput} />
					</View>

					<View style={Styles.formRow}>
						<TextLabel>Country:</TextLabel>
						<TextInput value={country} onChangeText={setCountry} style={Styles.textInput} />
					</View>
				</View>

			</View>

			<View style={[Styles.personButtonContainer, {borderBottomWidth: 0, marginBottom: 0}]}>
				<MyButton
					text="Save"
					type="major"    // default*|major|minor
					size="medium"      // small|medium*|large
					//onPress={showViewPeople}
				/>
				<MyButton
					text="Cancel"
					type="default"    // default*|major|minor
					size="minor"      // small|medium*|large
					//onPress={deletePerson}
				/>
        	</View>

		</ScrollView>
	</SafeAreaView>
	)
}