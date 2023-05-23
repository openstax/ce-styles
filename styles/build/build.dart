import 'dart:io';
import 'dart:convert';
import 'package:sass/sass.dart' as sass;
import 'package:source_maps/source_maps.dart';

void main(List<String> arguments) {
  if (arguments.length < 1) {
    throw Exception('Input argument not given.');
  }

  var inputFilePath = arguments[0];
  var outputFilePath = arguments[1];
  var stylesPath = "${Directory.current.path}/styles/";
  var styleName = inputFilePath.split('/')[3];

  if (File(stylesPath).existsSync()) {
    throw Exception('Cannot find styles root directory.');
  }

  sass.Callable toDataUri = new sass.Callable.function('toDataUri', r'$type, $path', (arguments) {
    var typeString = arguments[0].toString().replaceAll('"', '');
    var pathString = arguments[1].toString().replaceAll('"', '');
    var fileData = File("${stylesPath}${pathString}").readAsBytesSync();
    var encoded = base64Encode(fileData);
    var dataUri = "data:image/${typeString};base64,${encoded}";
    return sass.SassString(dataUri);
  });

  var startTime = DateTime.now();
  var result = sass.compileToResult(
    inputFilePath,
    loadPaths: {stylesPath},
    sourceMap: true,
    functions: [toDataUri]
  );
  var endTime = DateTime.now();
  print("compile time is: ${endTime.difference(startTime)}");

  if ((result.css.length > 0) & (outputFilePath.length > 0)) {
    var outputFile = new File(outputFilePath);
    outputFile.writeAsStringSync(result.css);
    new File("${outputFilePath}.map").writeAsStringSync(json.encode(result.sourceMap.toJson()));
    outputFile.writeAsStringSync("\n/*# sourceMappingURL=${styleName}-pdf.css.map */\n", mode: FileMode.append);
  } else {
    throw Exception("Empty output");
  }
}
