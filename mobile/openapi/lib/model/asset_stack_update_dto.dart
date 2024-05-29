//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AssetStackUpdateDto {
  /// Returns a new [AssetStackUpdateDto] instance.
  AssetStackUpdateDto({
    this.primaryAssetId,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  String? primaryAssetId;

  @override
  bool operator ==(Object other) => identical(this, other) || other is AssetStackUpdateDto &&
    other.primaryAssetId == primaryAssetId;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (primaryAssetId == null ? 0 : primaryAssetId!.hashCode);

  @override
  String toString() => 'AssetStackUpdateDto[primaryAssetId=$primaryAssetId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.primaryAssetId != null) {
      json[r'primaryAssetId'] = this.primaryAssetId;
    } else {
    //  json[r'primaryAssetId'] = null;
    }
    return json;
  }

  /// Returns a new [AssetStackUpdateDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AssetStackUpdateDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return AssetStackUpdateDto(
        primaryAssetId: mapValueOfType<String>(json, r'primaryAssetId'),
      );
    }
    return null;
  }

  static List<AssetStackUpdateDto> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <AssetStackUpdateDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = AssetStackUpdateDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, AssetStackUpdateDto> mapFromJson(dynamic json) {
    final map = <String, AssetStackUpdateDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = AssetStackUpdateDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of AssetStackUpdateDto-objects as value to a dart map
  static Map<String, List<AssetStackUpdateDto>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<AssetStackUpdateDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = AssetStackUpdateDto.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
  };
}

