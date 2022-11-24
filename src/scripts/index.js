import '../styles/index.scss';
import {JSONEditor} from 'vanilla-jsoneditor';

(function () {
    console.log('webpack starterkit');

    const pickerOpts = {
        types: [
            {
                description: 'Images',
                accept: {
                    'application/json': ['.json']
                }
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false
    };


    let fileHandle;
    let content = {
        text: undefined,
        json: {
            greeting: 'Hello World'
        }
    };
    const buttonOpenFile = document.getElementById("open");

    buttonOpenFile.addEventListener('click', async () => {
        // Destructure the one-element array.
        [fileHandle] = await window.showOpenFilePicker(pickerOpts);
        // Do something with the file handle.
        const file = await fileHandle.getFile();
        const text = await file.text();
        const error = document.getElementById('error');
        let jsonParsed;
        try {
            jsonParsed = JSON.parse(text);
        } catch (e) {
            error.innerHTML = e.message;
        }
        content.json = jsonParsed;
        if (content.json) {
            new JSONEditor({
                target: document.getElementById('jsonEditor'),
                props: {
                    content,
                    onChange: (updatedContent, previousContent, {contentErrors, patchResult}) => {
                        // content is an object { json: JSONValue } | { text: string }
                        console.log('onChange', {updatedContent, previousContent, contentErrors, patchResult});
                        content = updatedContent;
                    }
                }
            });
        } else {
            error.innerHTML = 'No data';
        }
    });

    const buttonSaveFile = document.getElementById("save");
    buttonSaveFile.addEventListener('click', async () => {
        // create a new handle
        //const newHandle = await window.showSaveFilePicker();
        // create a FileSystemWritableFileStream to write to
        const writableStream = await fileHandle.createWritable();

        const blob = new Blob([JSON.stringify(content.json, null, 2)], {
            type: "application/json",
        });

        // write our file
        await writableStream.write(blob);

        // close the file and write the contents to disk.
        await writableStream.close();
    });

})();