import React from 'react';
import { ScrollView, Text, Linking } from 'react-native';

const ExerciseData = ({ data }) => {
  if (!data) return null;

  return (
    <ScrollView style={{ marginTop: 20, width: '100%' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.title}</Text>
      <Text>Target Muscle Group: {data.targetMuscleGroup}</Text>
      <Text>Prime Mover Muscle: {data.primeMoverMuscle}</Text>
      <Text>Secondary Muscle: {data.secondaryMuscle}</Text>
      <Text>Body Region: {data.bodyRegion}</Text>
      <Text>Description: {data.description}</Text>
      <Text>Difficulty Level: {data.difficultyLevel}</Text>
      <Text>Primary Equipment: {data.primaryEquipment}</Text>
      <Text>Posture: {data.posture}</Text>
      <Text>Single or Double Arm: {data.singleOrDoubleArm}</Text>
      <Text>Grip: {data.grip}</Text>
      <Text>Force Type: {data.forceType}</Text>
      <Text>Mechanics: {data.mechanics}</Text>
      <Text>Laterality: {data.laterality}</Text>
      <Text>Combination Exercises: {data.combinationExercises}</Text>
      <Text>Plane of Motion: {data.planeOfMotion1}</Text>
      {data.videoUrl && (
        <Text style={{ color: 'blue', marginTop: 10 }}>
          Watch Video:{' '}
          <Text onPress={() => Linking.openURL(data.videoUrl)}>
            {data.videoUrl}
          </Text>
        </Text>
      )}
    </ScrollView>
  );
};

export default ExerciseData;
