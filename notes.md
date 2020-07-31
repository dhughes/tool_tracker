tool tracker

# User

* email
* password

# ToolType

* id
* type (end mill, ball nose, chamfer, drill bit, face mill ) - polymorphic?
* diameter
* vendor
* product_number
* description
* material (carbid, tian, etc)
* url
* number_of_flutes
* flute_length
* picture

# Tool

* id
* tool_type_id (FK to tool type)
* wear (number from 1 to 5? some sort of gut sense about how sharp the tool is.)
* deleted_at (to indicate when a  has been retired)

- has many runs - used to know roughly how worn it is.
- used in materials - knows what types of materials it's been used in.
- average run rating - would be dependent on the quality of the run.
- times used

# Operation

* id
* tool_id
* material_id
* operation_type (slot, surface, etc)
* configuration (json. based off the data for the operation)
* finished (indicates if the operation has actually been run)
* notes (markdown for notes about the particular run)
* overall rating of run (1 to 5 stars)
* failed
* chatter (1 to 5?)
* unpleasant noises
* chip size (1 (powder) to 5 (chunks))
* chip out? (1 (bad) to 5 (none) - maybe based on the material being cut?)
* other notes

- operation score. This might be something that takes the chatter, failure, chip size, etc, and scores them to give a run score. the higher the score the better.

# Material

* id
* name

# operation configuration

So, we have a bunch of different types of operations in fusion 360. These each have many settings. The settings chosen are, hopefully, the best ones for the material, operation, and cutter. A configuration has these overall elements, which are based off the tabs in the fusion 360 operation configuration dialog:

* tab - the tab in the dialog
* section - the section in the tab
* item - the item in the section
* value - the value selected for the item

I plan to build a constant representation for each of the operations I typically use. (Or maybe all operations.) I'll include all fields that are not related to tool, speeds, etc, since those are defined elsewhere in this tool tracker app. For example, Basically, the entire tool tab won't be included. Some other items won't be usable such as ones that require selecting objects from the model. (profiles, stock contours, etc.) I might form a habit of including these in the notes for the operation.

Anyhow, with the constant definitions, I can generate a form to collect this information for a particular operation type. I can set the values manually, or I can copy them from a different operation. My workflow might be something like:

* I need to create a new operation. Let's say a profile in aluminum using a 5mm end mill.
* I have a form where I select these three thing.
* After selecting them, I'm shown a list of similar operations. The list is sorted in order of operation score. I select one to base my operation off, or I can create a blank operation.
* This shows me a tabbed form similar to the operation dialog in F360.
* The form is pre-filled with data from the selected previous operation (or is blank).
* I can customize the operation as needed. For example, I can change the feed, plunge rate, step over, etc.
* When done, I save the operation.
* At this point the operation is in an incomplete state (meaning it hasn't been run).
* I can edit the configuration at any time, just 'cause it's easiest.
* I then carefully copy these settings into fusion 360's UI, generate g-code, setup the machine, and run the operation.
* After each operation I return to the app, mark the run as finished, and fill in details like failed, chatter, noise, etc.
* I'll have an option to discard an end mill if I destroy it.
* I save the final notes, and I've now got data to further hone in on the best configurations for a tool in a particular material and operation.

Oh, I forgot to mention that the data collected in the form is serialized into json and stored in the data field on the operation.
